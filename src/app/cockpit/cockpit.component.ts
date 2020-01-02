import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }> ();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }> ();
/*   newServerName = ''; */
  /* newServerContent = ''; */
 @ViewChild('serverContentImput', {static : false}) serverContentImput: ElementRef ;

  constructor() {

  }

  ngOnInit() {
  }
  onAddServer(nameServer: HTMLInputElement) {

    this.serverCreated.emit({
      serverName : nameServer.value,
      serverContent :  this.serverContentImput.nativeElement.value,
    });

  }

  onAddBlueprint(nameServer: HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName : nameServer.value,
      serverContent :  this.serverContentImput.nativeElement.value,
    });
  }
}
