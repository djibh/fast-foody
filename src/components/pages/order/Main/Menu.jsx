import { useState } from "react";
import { styled } from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu"

export default function Menu() {
const [menu, setmenu] = useState(fakeMenu2)

  return (
    <MenuStyled>
      {
        menu.map((product, idx) => {
          return <div key={idx} className="product">{ product.title }</div>
        })
      }
    </MenuStyled>
  )
}

const MenuStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  background: blue;

  .product {
    background: red;
    width: 224px;
    height: 330px;
  }
`;