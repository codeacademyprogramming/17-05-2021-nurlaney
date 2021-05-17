import React, { Component } from 'react';
import currency from '../../rates.json';

class Converter extends Component {
    //references
    inputRef = React.createRef();
    selectRef = React.createRef();
    outputSelectRef = React.createRef();
    outputRef = React.createRef();
    

    exchange(){
        const calculated = this.calculateCurrency(this.selectRef.current.value,this.outputSelectRef.current.value);
        this.outputRef.current.textContent = this.rounder(calculated);
    }

    calculateCurrency(first,second){
        const firstSelect = currency.find(x => x.code == first).value;
        const secondSelect = currency.find(x => x.code == second).value;
        return (firstSelect/secondSelect) * this.inputRef.current.value;
    }

    rounder(num){
        return Math.round(num * 100) / 100;
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="head">
                        <img src={`${process.env.PUBLIC_URL}/imgs/meu.png`} />
                    </div>
                    <div className='converter-card'>
                        <div className='top'>
                            <p>From :</p>
                            <input ref={this.inputRef} type='number' placeholder='Set amount'/>
                            <select ref={this.selectRef}>
                                {currency.map((item, value) => (
                                    <option key={value}>{item.code}</option>
                                ))}
                            </select>
                        </div>
                        <div className='middle text-center'>
                            <img onClick={this.swapSelects.bind(this)} src={`${process.env.PUBLIC_URL}/imgs/switch.png`} />
                        </div>
                        <div className='bottom'>
                            <p>To :</p>
                            <span><b ref={this.outputRef}>0</b></span>
                            <select ref={this.outputSelectRef}>
                                {currency.map((item, value) => (
                                    <option key={value}>{item.code}</option>
                                ))}
                            </select>
                        </div>
                        <button onClick={this.exchange.bind(this)}>Exchange</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Converter;
