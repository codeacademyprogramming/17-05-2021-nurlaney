import React, { Component } from 'react';
import currency from '../../rates.json';

class Converter extends Component {
    //references
    inputRef = React.createRef();
    selectRef = React.createRef();
    outputSelectRef = React.createRef();
    outputRef = React.createRef();
    errorMessageRef = React.createRef();
    
    exchange(){
        if(this.selectRef.current.value === 'default' || this.outputSelectRef.current.value === 'default'){
            this.errorMessageRef.current.classList.remove('d-none');
        }else{
            const calculated = this.calculateCurrency(this.selectRef.current.value,this.outputSelectRef.current.value);
            this.outputRef.current.textContent = this.rounder(calculated);
            this.errorMessageRef.current.classList.add('d-none');
        }
    }

    calculateCurrency(first,second){
        const firstSelect = currency.find(x => x.code === first).value;
        const secondSelect = currency.find(x => x.code === second).value;
        return (firstSelect/secondSelect) * this.inputRef.current.value;
    }

    rounder(num){
        return Math.round(num * 100) / 100;
    }

    swapSelects(){
        let temp;
        temp = this.selectRef.current.value;
        this.selectRef.current.value = this.outputSelectRef.current.value;
        this.outputSelectRef.current.value = temp;
        this.exchange();
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
                            <select ref={this.selectRef} defaultValue={'default'}>
                            <option disabled value={'default'}>Select</option>
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
                            <select ref={this.outputSelectRef} defaultValue={'default'}>
                            <option disabled value={'default'}>Select</option>
                                {currency.map((item, value) => (
                                    <option key={value}>{item.code}</option>
                                ))}
                            </select>
                        </div>
                        <button onClick={this.exchange.bind(this)}>Exchange</button>
                        <p ref={this.errorMessageRef} className='errorMessage text-danger d-none'>You have to select currency</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Converter;
