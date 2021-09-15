import React from 'react';
import {ProductsContainer,
    ProductsHeading,
    ProductsWrapper,
    ProductCard,
    ProductsImg,
    ProductTitle,
    productDesc,
    ProductPrice,
    ProductButton}
    from "./ProductsElements";

export const Products = ({heading , data}) => {
    return (
        <>
        <ProductsContainer>
            <ProductsHeading>
            {heading}
            </ProductsHeading>
            <ProductsWrapper>
                {data.map((product , index) => {

                    return(
                        <ProductCard key={index}>

                        <ProductsImg src={product.img} alt={product.alt}/>
                        <productInfo>
                            <ProductTitle>{product.name}</ProductTitle>
                            <productDesc>{product.desc}</productDesc>
                            <ProductPrice>{product.price}</ProductPrice>
                            <ProductButton>{product.button}</ProductButton>
                        </productInfo>

                        </ProductCard>
                    )

                })}
            </ProductsWrapper>
        </ProductsContainer>
            
        </>
    )
}
