import { Component, OnInit } from '@angular/core';
import { LogService } from '../../shared/services/log.service';
import { TranslateModule } from '@ngx-translate/core';
import { SelectComponent } from '../../shared/components/select/select.component';

@Component({
    selector: 'app-log-files',
    standalone: true,
    imports: [TranslateModule, SelectComponent],
    templateUrl: 'log-files.component.html',
    styleUrl: 'log-files.component.css'
})
export class LogFilesComponent implements OnInit {
    log: any;
    files!: any[];

    constructor(private logService: LogService) { }

    ngOnInit() {
        this.loadLog();
        this.loadLogFiles();
    }

    loadLogFiles() {
        this.logService.loadFiles().subscribe(res => this.files = res)
    }

    loadLog() {
        this.logService.loadLog().subscribe(res => this.log = res)
    }
}