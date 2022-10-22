import React from "react";

class Content extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            product : this.props.item[0].images[0],
            thumbActive : 0 ,
        }
    }

    OnThumnail = (thumbnail) =>{
        this.setState({
            product : this.props.item[0].images[thumbnail],
            thumbActive : thumbnail
        })
    }

    OnArrow =(direction)=>{
        if(direction === 1){
            if(this.state.thumbActive !==3){
                this.setState({
                    product : this.props.item[0].images[this.state.thumbActive + direction],
                    thumbActive : this.state.thumbActive + direction
                })
            }
        }else{
            if(this.state.thumbActive !==0){
                this.setState({
                    product : this.props.item[0].images[this.state.thumbActive + direction],
                    thumbActive : this.state.thumbActive + direction
                })
            }
        }
        
    }


    render(){
        return(
            <div className="md:container md:px-5 lg:px-0 mx-auto grid md:grid-cols-2 md:pt-[7rem] gap-[5rem] lg:gap-[8rem] items-center pb-[2rem] relative">
                {this.props.DisCart?
                <div className="z-20 absolute rounded-lg shadow-2xl bg-white right-1/2 transform translate-x-1/2 mt-[1rem]  w-[96%] md:w-[370px] md:translate-x-0 md:h-[230px] top-0 md:-top-[2%] md:right-0">
                    <h2 className="font-bold p-[1rem] border-b boder-2">Cart</h2>
                    {this.props.Cart.length?
                    <div className="p-[1.5rem]">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-[1rem]">
                                <img src={this.props.Cart[0].image} alt="thumbnail" className="w-[50px] h-[50px]"/>
                                <div className="flex flex-col">
                                    <p>{this.props.Cart[0].name}</p>
                                    <p>${this.props.Cart[0].price} x<span> {this.props.Cart[0].stock} </span><span className="font-bold"> ${this.props.Cart[0].total.toFixed(2)}</span></p>
                                </div>
                            </div>
                            <img src="images/icon-delete.svg" alt="delete" className="cursor-pointer" onClick={() => this.props.OnRemove(this.props.Cart[0].name)}/>
                        </div>
                    <button className="w-full p-[1rem] bg-[#FF7D1A] text-center mt-[1rem] rounded-lg text-white font-bold">Checkout</button>
                   </div>
                    :
                    <div className="flex items-center justify-center  h-[200px]">Your cart is empty
                    </div>
                    }
                    
                </div>
                :
                null}
                <div className="col-start-1 col-span-1 row-start-1 row-span-1 flex flex-col gap-[2rem] lg:pl-[4rem]">
                    <div className="relative">
                        <img src={this.state.product} alt="ee" className="md:rounded-lg"/>
                        <img src="images/icon-previous.svg" alt="previous" className="absolute px-[0.75rem] py-[0.6rem] cursor-pointer bg-white rounded-full left-0 top-[47%] ml-[1rem] md:hidden"onClick={() => this.OnArrow(-1)}/>
                        <img src="images/icon-next.svg" alt="next" className="absolute px-[0.75rem] py-[0.6rem] cursor-pointer bg-white rounded-full right-0 top-[47%] mr-[1rem] md:hidden" onClick={() => this.OnArrow(1)}/>
                    </div>
                    
                    <div className="w-full hidden md:grid grid-cols-4 gap-[2rem]">
                        <img src={this.props.item[0].thumbnail[0]} alt="1" className={`rounded-lg cursor-pointer ${this.state.thumbActive === 0?'border-4 border-[#FF7D1A] opacity-40':null} hover:opacity-70`} onClick={()=> this.OnThumnail(0)}/>
                        <img src={this.props.item[0].thumbnail[1]} alt="2" className={`rounded-lg cursor-pointer ${this.state.thumbActive === 1?'border-4 border-[#FF7D1A] opacity-40':null} hover:opacity-70`} onClick={()=> this.OnThumnail(1)}/>
                        <img src={this.props.item[0].thumbnail[2]} alt="3" className={`rounded-lg cursor-pointer ${this.state.thumbActive === 2?'border-4 border-[#FF7D1A] opacity-40':null} hover:opacity-70`} onClick={()=> this.OnThumnail(2)}/>
                        <img src={this.props.item[0].thumbnail[3]} alt="4" className={`rounded-lg cursor-pointer ${this.state.thumbActive === 3?'border-4 border-[#FF7D1A] opacity-40':null} hover:opacity-70`} onClick={()=> this.OnThumnail(3)}/>
                    </div>
                </div>
                <div className="container px-5 md:px-0 md:max-w-full md:w-full mx-auto col-start-1 col-span-1 row-start-2 row-span-1 md:col-start-2 md:row-start-1 ">
                    <h4 className="text-[#FF7D1A] font-bold uppercase mb-[1rem]">{this.props.item[0].Company}</h4>
                    <h1 className="font-bold text-[#1D2025] text-5xl md:max-w-[576px] mb-[2rem]">{this.props.item[0].name}</h1>
                    <p className="text-[#68707D] mb-[1rem] md:max-w-[450px]">{this.props.item[0].detail}
                    </p>
                    <div className="flex flex-col justify-between">
                        <div className="flex items-center gap-4">
                            <p className="font-bold text-[#1D2025] text-3xl mb-2">{`$${this.props.item[0].after.toFixed(2)}`}</p>
                            <p className="text-[#FF7D1A] py-1 px-2 bg-[#FFDFC7] rounded-lg font-bold">{this.props.item[0].sale}</p>
                        </div>
                        <p className="text-[#B6BCC8] font-bold line-through mb-[2rem]">{`$${this.props.item[0].price.toFixed(2)}`}</p>
                    </div>
                    <div className="flex w-full md:max-w-[450px] gap-[1rem] items-center flex-col md:flex-row">
                        <div className="bg-[#F7F8FD] w-full md:w-auto flex justify-between gap-[1rem] lg:gap-[2rem] items-center rounded-lg p-[0.5rem]">
                            <img src="images/icon-minus.svg" alt="minus" className="cursor-pointer p-[1rem]" onClick={() => this.props.OnAddPiece(-1)}/>
                            <p className="font-bold">{this.props.piece}</p>
                            <img src="images/icon-plus.svg" alt="plus" className="cursor-pointer p-[1rem]" onClick={() => this.props.OnAddPiece(1)}/>
                        </div>
                        <div className="bg-[#FF7D1A] text-white p-[1rem] rounded-lg w-full md:w-[170px] lg:w-[250px] shadow-lg shadow-[#FF7D1A] cursor-pointer hover:opacity-60" onClick={this.props.OnAddCart}>
                            <div className="flex gap-[1rem] justify-center">
                                <svg className="fill-white" width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"  fillRule="nonzero"/></svg>
                                <p>Add to cart</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content;