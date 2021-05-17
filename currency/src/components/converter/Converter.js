import React, { Component } from 'react';
import currency from '../../rates.json';

class Converter extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="head">
                        <img src={`${process.env.PUBLIC_URL}/imgs/meu.png`} />
                    </div>
                    <div className='converter-card'>
                        <div className='top'>
                            <p>From</p>
                            <input type='number' />
                            <select>
                                {currency.map((item, value) => (
                                    <option key={value}>{item.code}</option>
                                ))}
                            </select>
                        </div>
                        <div className='middle text-center'>
                            <img src={`${process.env.PUBLIC_URL}/imgs/switch.png`} />
                        </div>
                        <div className='bottom'>
                            <p>To</p>
                            <span><b>1700</b></span>
                            <select>
                                {currency.map((item, value) => (
                                    <option key={value}>{item.code}</option>
                                ))}
                            </select>
                        </div>
                    <button>Exchange</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Converter;
