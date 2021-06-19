import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'angular-data-binding-v2';
  inputPlaceHolder = 'Enter text'
  mouseDivX = ''
  mouseDivY = ''
  buttonClickCounter:number = 0
  isEmailValid = true


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
}
