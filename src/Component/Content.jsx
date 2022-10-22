import React from "react";

class Content extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            product : 'images/image-product-1.jpg',
            thumbActive : 1 ,
        }
    }

    OnThumnail = (thumbnail) =>{
        this.setState({
            product : `images/image-product-${thumbnail}.jpg`,
            thumbActive : thumbnail
        })
    }

    OnArrow =(direction)=>{
        if(direction === 1){
            if(this.state.thumbActive !==4){
                this.setState({
                    product : `images/image-product-${this.state.thumbActive + direction}.jpg`,
                    thumbActive : this.state.thumbActive + direction
                })
            }
        }else{
            if(this.state.thumbActive !==1){
                this.setState({
                    product : `images/image-product-${this.state.thumbActive + direction}.jpg`,
                    thumbActive : this.state.thumbActive + direction
                })
            }
        }
        
    }


    render(){
        return(
            <div className="md:container md:px-5 lg:px-0 mx-auto grid md:grid-cols-2 md:mt-[7rem] gap-[5rem] lg:gap-[8rem] items-center pb-[2rem]">
                <div className="col-start-1 col-span-1 row-start-1 row-span-1 flex flex-col gap-[2rem] lg:pl-[4rem]">
                    <div className="relative">
                        <img src={this.state.product} alt="ee" className="md:rounded-lg"/>
                        <img src="images/icon-previous.svg" alt="" className="absolute px-[0.75rem] py-[0.6rem] cursor-pointer bg-white rounded-full left-0 top-[47%] ml-[1rem] md:hidden"onClick={() => this.OnArrow(-1)}/>
                        <img src="images/icon-next.svg" alt="" className="absolute px-[0.75rem] py-[0.6rem] cursor-pointer bg-white rounded-full right-0 top-[47%] mr-[1rem] md:hidden" onClick={() => this.OnArrow(1)}/>
                    </div>
                    
                    <div className="w-full hidden md:grid grid-cols-4 gap-[2rem]">
                        <img src="images/image-product-1-thumbnail.jpg" alt="1" className={`rounded-lg cursor-pointer ${this.state.thumbActive === 1?'border-4 border-[#FF7D1A] opacity-40':null} hover:opacity-70`} onClick={()=> this.OnThumnail(1)}/>
                        <img src="images/image-product-2-thumbnail.jpg" alt="2" className={`rounded-lg cursor-pointer ${this.state.thumbActive === 2?'border-4 border-[#FF7D1A] opacity-40':null} hover:opacity-70`} onClick={()=> this.OnThumnail(2)}/>
                        <img src="images/image-product-3-thumbnail.jpg" alt="3" className={`rounded-lg cursor-pointer ${this.state.thumbActive === 3?'border-4 border-[#FF7D1A] opacity-40':null} hover:opacity-70`} onClick={()=> this.OnThumnail(3)}/>
                        <img src="images/image-product-4-thumbnail.jpg" alt="4" className={`rounded-lg cursor-pointer ${this.state.thumbActive === 4?'border-4 border-[#FF7D1A] opacity-40':null} hover:opacity-70`} onClick={()=> this.OnThumnail(4)}/>
                    </div>
                </div>
                <div className="container px-5 md:px-0 md:max-w-full md:w-full mx-auto col-start-1 col-span-1 row-start-2 row-span-1 md:col-start-2 md:row-start-1 ">
                    <h4 className="text-[#FF7D1A] font-bold uppercase mb-[1rem]">Sneaker Company</h4>
                    <h1 className="font-bold text-[#1D2025] text-5xl md:max-w-[576px] mb-[2rem]">Fall Limited Edition Sneakers</h1>
                    <p className="text-[#68707D] mb-[1rem] md:max-w-[450px]">These low-profile sneakers are your perfect casual wear companion. Featuring a 
                    durable rubber outer sole, they’ll withstand everything the weather can offer.
                    </p>
                    <div className="flex flex-col justify-between">
                        <div className="flex items-center gap-4">
                            <p className="font-bold text-[#1D2025] text-3xl mb-2">$125.00</p>
                            <p className="text-[#FF7D1A] py-1 px-2 bg-[#FFDFC7] rounded-lg font-bold">50%</p>
                        </div>
                        <p className="text-[#B6BCC8] font-bold line-through mb-[2rem]">$250.00</p>
                    </div>
                    <div className="flex w-full md:max-w-[450px] gap-[1rem] items-center flex-col md:flex-row">
                        <div className="bg-[#F7F8FD] w-full md:w-auto flex justify-between gap-[1rem] lg:gap-[2rem] items-center rounded-lg p-[0.5rem]">
                            <img src="images/icon-minus.svg" alt="minus" className="cursor-pointer p-[1rem]" onClick={() => this.props.OnAddPiece(-1)}/>
                            <p className="font-bold">{this.props.piece}</p>
                            <img src="images/icon-plus.svg" alt="plus" className="cursor-pointer p-[1rem]" onClick={() => this.props.OnAddPiece(1)}/>
                        </div>
                        <div className="bg-[#FF7D1A] text-white p-[1rem] rounded-lg w-full md:w-[170px] lg:w-[250px] shadow-lg shadow-[#FF7D1A] cursor-pointer hover:opacity-60">
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