import React, { Component } from 'react'

export default class Products extends Component {
data = [
    {
        id: 1,
        price: 30,
        name: "GUCCI G8850U",
        url: "./img/v1.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 2,
        price: 50,
        name: "GUCCI G8759H",
        url: "./img/v2.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 3,
        price: 30,
        name: "DIOR D6700HQ",
        url: "./img/v3.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 4,
        price: 70,
        name: "DIOR D6005U",
        url: "./img/v4.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 5,
        price: 40,
        name: "PRADA P8750",
        url: "./img/v5.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 6,
        price: 60,
        name: "PRADA P9700",
        url: "./img/v6.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 7,
        price: 80,
        name: "FENDI F8750",
        url: "./img/v7.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 8,
        price: 100,
        name: "FENDI F8500",
        url: "./img/v8.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        id: 9,
        price: 60,
        name: "FENDI F4300",
        url: "./img/v9.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
];
    state = {
    name: "",
    price: "",
    url: "",

};

hienThi = () => {
    return this.data.map((id)=>{
        return <button onClick={ ()=> {
            this.setState({
            url: id.url,
            name: id.name,
            price: id.price
            })
            }} className='btn py-2'><img src={id.url} alt="hinhanh" /></button>
    })
}

  render() {
    return (
        <div className='bgHinhAnh pb-5'>
        <div className="container pb-5">
        <div className="products pb-5">
          <div className='row text-center py-5 px-5'>
            <div className="col-6">
              <img src="./img/model.jpg" alt="" />
              <img className='hinhAnhUI' src={this.state.url} alt="" />
              <div className='textHienThi text-left'>
                <p className='pl-3 pt-3'>Tên: {this.state.name}</p>
                <p className='pl-3'>Giá: {this.state.price}</p>
              </div>
            </div>
            <div className="col-6">
              <img src="./img/model.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="btnProducts">
          <div className='container py-2'>
            <div className='bg-light py-2'>
            {this.hienThi()}
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}




