import React from 'react';
import { Table } from 'react-bootstrap';

export default function SellTable(props) {
  const { buyer } = props;

  return (
    <div className='left'>
      <Table variant='dark'>
        <caption> Looking to Buy? </caption>

        <thead>
          <tr>
            <th> </th>
            <th>Exchange</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {buyer.map((item) => {
            return (
              <tr key={item.source}>
                <td>
                  {item.name === 'ETH' ? (
                    <img
                      alt=''
                      src='https://cryptologos.cc/logos/ethereum-eth-logo.png'
                      width='30'
                      height='30'
                      style={{ display: 'vertical-align:top' }}
                    />
                  ) : (
                    <img
                      alt=''
                      src='https://cryptologos.cc/logos/bitcoin-btc-logo.png'
                      width='30'
                      height='30'
                      style={{ display: 'vertical-align:top' }}
                    />
                  )}
                </td>
                <td>{item.source}</td>
                <td>{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}