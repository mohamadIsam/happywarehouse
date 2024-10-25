using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Application.IServices;
using Application.Dto;
using Domain.Identity;
using Application.Helper;

namespace Application.Services;

public class AuthService(UserManager<ApplicationUser> userManager,
SignInManager<ApplicationUser> signInManager, JwtHelper jwtHelper) : IAuthService
{
    public async Task<string> Login(LoginDto login)
    {
        var user = await userManager.FindByEmailAsync(login.Email.ToLower());

        if (user is null)
            throw new UnauthorizedAccessException("incorrect-username-or-password");

        if (!user.IsActive)
            throw new Exception("user-inactive");

        var result = await signInManager.PasswordSignInAsync(user, login.Password, false, true);

        if (result.IsLockedOut)
            throw new Exception("username-isLockedOut");

        if (!result.Succeeded && !result.RequiresTwoFactor)
            throw new Exception("incorrect-username-or-password");

        //generate token
        var token = await jwtHelper.GenerateJwtToken(user);

        return token;
    }

    public async Task<string> ChangePassword(ChangePasswordDto changePassword, string userId)
    {
        var user = await userManager.FindByIdAsync(userId.ToString());
        // Check the current password
        var passwordCheck = await userManager.CheckPasswordAsync(user, changePassword.CurrentPassword);
        if (!passwordCheck)
        {
            throw new UnauthorizedAccessException("Invalid username or password.");
        }
        else if (changePassword.NewPassword != changePassword.RepeatPassword)
        {
            throw new UnauthorizedAccessException("Repeat password is incorrect.");
        }
        // Change the password
        var result = await userManager.ChangePasswordAsync(user, changePassword.CurrentPassword, changePassword.NewPassword);

        if (!result.Succeeded)
        {
            throw new UnauthorizedAccessException("Invalid username or password.");
        }
        //generate token
        var token = await jwtHelper.GenerateJwtToken(user);

        return token;
    }
}
