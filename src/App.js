import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {BtnBold, BtnItalic, BtnUnderline, InputCont} from './styledComponents'
import './App.css'

class App extends Component {
  state = {
    isBold: false,
    isItalic: false,
    isUnderlined: false,
    userInput: '',
  }

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  onClickBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({isUnderlined: !prevState.isUnderlined}))
  }

  render() {
    const {isUnderlined, isBold, isItalic, userInput} = this.state

    return (
      <div className="Bg">
        <div className="ImgEditCard">
          <div className="ImgCont">
            <h1 className="ImgHead">Text Editor</h1>
            <img
              className="TextImg"
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </div>
          <div className="TextCont">
            <div className="BtnsTopCont">
              <ul className="BtnsCont">
                <li>
                  {' '}
                  <BtnBold
                    isBold={isBold}
                    onClick={this.onClickBold}
                    type="button"
                    data-testid="bold"
                  >
                    <VscBold className="BtnIcon" />
                  </BtnBold>
                </li>
                <li>
                  {' '}
                  <BtnItalic
                    isItalic={isItalic}
                    onClick={this.onClickItalic}
                    type="button"
                    data-testid="italic"
                  >
                    <GoItalic className="BtnIcon" />
                  </BtnItalic>
                </li>
                <li>
                  {' '}
                  <BtnUnderline
                    isUnderlined={isUnderlined}
                    onClick={this.onClickUnderline}
                    type="button"
                    data-testid="underline"
                  >
                    <AiOutlineUnderline className="BtnIcon" />
                  </BtnUnderline>
                </li>
              </ul>
            </div>
            <hr className="HrLine" />
            <InputCont
              isUnderlined={isUnderlined}
              isItalic={isItalic}
              isBold={isBold}
              value={userInput}
              onChange={this.onChangeInput}
              cols="30"
              rows="7"
            ></InputCont>
          </div>
        </div>
      </div>
    )
  }
}
export default App
