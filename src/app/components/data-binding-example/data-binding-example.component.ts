import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-example',
  templateUrl: './data-binding-example.component.html',
  styleUrls: ['./data-binding-example.component.css']
})
export class DataBindingExampleComponent implements OnInit {

  cells = []
  damkaSelectValue
  ngOnInit()
  {
    for(let i=0; i<64; i++)
    {
      this.cells.push({
        isPieceExist : false
      })
    }
  }

  title = 'angular-data-binding-v2';
  inputPlaceHolder = 'Enter text'
  mouseDivX = ''
  mouseDivY = ''
  buttonClickCounter:number = 0
  isEmailValid = true
  selectValue

  persons = [
    {
      name:'David',
      age: 22
    },
    {
      name:'Eliza',
      age: 22
    },
    {
      name:'Maxim',
      age: 11
    }
  ]


  isButtonDisabled = true
  buttonClasses = {
    'red-background': this.isButtonDisabled,
    'blue-background': !this.isButtonDisabled
  }

  returnHelloWorld()
  {
    return 'Hello World'
  }

  retunTitleFunc()
  {
    return 'The title is ' + this.title
  }

  onClickButtonEnable()
  {
    this.isButtonDisabled = !this.isButtonDisabled
  }

  onInput(event)
  {
    this.inputPlaceHolder = event.target.value

  }

  onMouseSqureHover(event)
  {
    this.mouseDivX = event.offsetX
    this.mouseDivY = event.offsetY
  }

  buttonColorChanger()
  {
    if(this.isButtonDisabled)
    {
      return 'blue-background'
    }
    else
    {
      return 'red-background'
    }
  }

  buttonClickerCounterFunc()
  {
    if(this.buttonClickCounter > 2)
    {
      this.buttonClickCounter = 0
    }
    else
    {
      this.buttonClickCounter++
    }
  }
  buttonClickerColorChanger()
  {
    switch(this.buttonClickCounter)
    {
      case 1:
      {
        return 'first-click'
      }
      case 2:
      {
        return 'second-click'
      }
      case 3:
      {
        return 'third-click'
      }
    }
  }

  validtionChecker(event)
  {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    this.isEmailValid = validRegex.test(String(event.target.value).toLocaleLowerCase())
  }


  message:string = ""
  messages:string [] = []
  emptyMessage = true

  messageInput(event)
  {
    this.message = event.target.value
  }

  messageSumbit()
  {
    if(this.message.length===0)
    {
      return
    }
    this.messages.push(this.message)
    this.emptyMessage=false
  }

  colorProvider(index)
  {
     const isColEven = index % 2 ===0;
     const isRowEven = Math.floor(index/8) % 2 ===0

     if(isRowEven)
     {
       return isColEven ? false : true
     }
     else
     {
       return isColEven ? true : false
     }
  }

  piecePutter(cell)
  {
    if(this.colorProvider(cell))
    {
      this.cells[cell].isPieceExist = !this.cells[cell].isPieceExist
    }
  }

  onChangeSelect(event)
  {
    this.selectValue = event.target.value
  }



  damkaChangeSelect(event)
  {
    this.damkaChangeSelect = event.target.value
  }

}
