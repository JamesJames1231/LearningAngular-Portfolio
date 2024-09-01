import { NgClass, NgFor } from '@angular/common';
import { Component, TrackByFunction } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  active = ["uni", "personal", "work"];
  current: string = "uni";

  changeState(a: string){
    if(this.active.includes(a)){
      this.current = a;
    }
  }

  personal = [
    {id: 1, name: "Python Cloud Storage Re-write", 
      text: [" Python ", " SQL ", " Web Dev "] , 
      link: "https://github.com/JamesJames1231/Dissertation-ReWrite",
      image: "/assets/uni/PythonCloudStorage.png"
    },
    {id: 2, name: "BSC UniMaps", 
      text: [" PHP ", " Web Dev ", " SQL ", " No UX/UI "],
      link: "https://github.com/james-james-247/BSC-UniMaps",
      image: "/assets/uni/PythonCloudStorage.png"
    },
    {id: 3, name: "Work Managment System", 
      text: [" C# ", " SQL ", " Youth Spirit "],
      link: "https://github.com/james-james-247/MSc-WorkManagmentSystem",
      image: "/assets/uni/PythonCloudStorage.png"},
    {id: 4, name: "Side Project For Lecturer (Auto Document)", 
      text: [" Python "],
      link: "https://github.com/james-james-247/MSC-AutoCodeDoc",
      image: "/assets/uni/PythonCloudStorage.png"
    },
    {id: 5, name: "City Safety App",
      text: [" Java ", " SQL ", " JSON "],
      link: "https://github.com/james-james-247/MSC-AutoCodeDoc",
      image: "/assets/uni/PythonCloudStorage.png"
    },
  ]
}
