using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Application.IServices;
using Application.Exceptions;
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
            throw new WarehouseException("incorrect-username-or-password", StatusCodes.Status403Forbidden);

        if (!user.IsActive)
            throw new WarehouseException("user-inactive", StatusCodes.Status403Forbidden);

        var result = await signInManager.PasswordSignInAsync(user, login.Password, false, true);

        if (result.IsLockedOut)
            throw new WarehouseException("username-isLockedOut", StatusCodes.Status403Forbidden);

        if (!result.Succeeded && !result.RequiresTwoFactor)
            throw new WarehouseException("incorrect-username-or-password", StatusCodes.Status403Forbidden);

        //generate token
        var token = await jwtHelper.GenerateJwtToken(user);

        return token;
    }

    public async Task<string> ChangePassword(ChangePasswordDto changePassword)
    {
        var user = await userManager.FindByIdAsync(changePassword.Id.ToString());
        // Check the current password
        var passwordCheck = await userManager.CheckPasswordAsync(user, changePassword.CurrentPassword);
        if (!passwordCheck)
        {
            throw new WarehouseException("incorrect-username-or-password", StatusCodes.Status403Forbidden);
        }
        else if (changePassword.NewPassword != changePassword.RepeatPassword)
        {
            throw new WarehouseException("repeat_password_incorrect.", StatusCodes.Status403Forbidden);
        }
        // Change the password
        var result = await userManager.ChangePasswordAsync(user, changePassword.CurrentPassword, changePassword.NewPassword);

        if (!result.Succeeded)
        {
            throw new WarehouseException("incorrect-username-or-password", StatusCodes.Status403Forbidden);
        }
        //generate token
        var token = await jwtHelper.GenerateJwtToken(user);

        return token;
    }
}
