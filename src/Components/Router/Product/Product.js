import React from "react";
import "../../style.css";
import Info from "./info/Info";
import Basket from "../AddBasket";
import { Tooltip, Input } from "antd";
import { Context } from "../../../Context/Context";
// import { languages } from "../../languages";
import Card from "./skeleton/Card";
import "../../../Sass/product.scss";
import { Route, Routes, Link } from "react-router-dom";

// const reducer = (state, setState) => {
//   // console.log(state)
//   switch (setState.type) {
//     case "PRODUCT":
//       return {
//         ...state,
//         product: setState.product,
//       };
//     case "ID":
//       return {
//         ...state,
//         id: setState.id,
//       };
//     case "SHOW":
//       return {
//         ...state,
//         show: setState.show
//       };
//     case "ISLOADING":
//       return {
//         ...state,
//         isLoading: setState.isLoading,
//       };
//     case "BASKET":
//       return {
//         ...state,
//         basket: setState.basket,
//       };
//     case "SHOWBASKET":
//       return {
//         ...state,
//         showBasket: setState.showBasket,
//       };
//     case "SEARCH":
//       return {
//         ...state,
//         search: setState.search,
//       };
//     default:
//   }
// };

const Product = ({ location, background}) => {

  const { lang } = React.useContext(Context);

  const [state, setState] = React.useReducer((prevState, nextState) => ({...prevState, ...nextState}), {
    isLoading: false,
    product: [],
    id: 0,
    show: false,
    basket: [],
    showBasket: false,
    search: "",
  });

  const requestFakeApi = async () => {
    setState({
      isLoading: true,
    });
    const res = await fetch("https://fakestoreapi.com/products");
    const cardData = await res.json();
    console.log(cardData);
    // setProduct(cardData);
    setState({
      product: cardData,
    });
    setTimeout(() => {
      setState({
        isLoading: false,
      });
    }, 1000);
  };

  const addBasket = (e, item) => {
    if (e.target.checked) {
      // setBasket([...basket, item]);
      setState({
        basket: [...state.basket, item],
      });
    } else {
      const newbasket = state.basket.filter((basket) => basket.id !== item.id);
      // setBasket(newbasket);
      setState({
        basket: newbasket,
      });
    }
  };



  React.useEffect(() => {
    requestFakeApi();
  }, []);
  console.log(state.id)

  return (
    <div className="container">
      <div className="product">
      {background && (
          <Routes>
            <Route
              path={location.pathname + "/info"}
              element={
                <Info show={state.show} setState={setState} id={state.id}/>
              }
            />
          </Routes>
        )}
        {/* <Info info={location.pathname === "/product/info" ? true :false} setState={setState} id={state.id} /> */}

        <Info  show = {location.pathname === "/product/info" ? true :false} setState={setState} id={state.id}  />
        <div className="product_header">
          <h1>products</h1>
          <Input
            type="text"
            placeholder="Search..."
            className="w-50"
            value={state.search}
            onChange={(e) =>
              setState({
                search: e.target.value,
              })
            }
          />
          <div className="basket">
            {!!state.basket.length && (
              <div className="basket-count">{state.basket.length}</div>
            )}
            <button
              className="btn btn-warning"
              onClick={() => {
                setState({
                  showBasket: true,
                });
              }}
            >
              <i class="bi bi-cart4"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="row m-2 grid">
        {state.isLoading ? (
          <Card />
        ) : (
          state.product
            ?.filter(
              (i) =>
                i.title.slice(0, state.search.length).toLowerCase() ===
                state.search.toLowerCase()
            )
            .map((item, key) => (
              <div className="col-sm-12 col-lg-3 col-md-5 mt-3">
                <div className="card p-2 me-2 card-bg" key={key}>
                  <img src={item.image} className="img-fluid imgC" alt="..." />
                  <div className="card-body d-flex justify-content-between">
                    <h5 className="card-title">
                      {item.title.length > 20 ? (
                        <Tooltip placement="top" title={item.title}>
                          {item.title.slice(0, 20)}...
                        </Tooltip>
                      ) : (
                        item.title
                      )}
                    </h5>
                    <button type="button" class="btn btn-warning">
                      {/* {languages(lang)["details"]} */}
                      Details
                    </button>
                  </div>
                  <div className="d-flex justify-content-between ms-3 mt-2">
                    <button
                      type="button"
                      className="btn btn-info"
                      onClick={() => {
                        // setId(item.id);
                        setState({
                          id: item.id,
                        });
                        // setState({
                        //   type: "INFO",
                        //   info: true,
                        // });
                        // setInfo(true);
                      }}
                    >
                      <Link to={location.pathname + "/info" }state={{background: location}}>
                      {/* {languages(lang)["info"]} */}
                      info
                      </Link>
                      
                    </button>
                    <div>
                      <input
                        type="checkbox"
                        className=" form-check-input"
                        style={{ width: "30px", height: "30px" }}
                        checked={state.basket
                          ?.map((product) => product.id)
                          .includes(item.id)} 
                        onChange={(e) => {
                          addBasket(e, item);
                        }}
                      />
                    </div>
                    <button type="button" className="btn btn-danger me-3">
                      {/* {languages(lang)["delete"]} */}
                      delete
                    </button>
                  </div>
                </div>
              </div>
            ))
        )}
     
        <Basket
          showBasket={state.showBasket}
          basket={state.basket}
          setState={setState}
        />
      </div>
    </div>
  );
};

export default Product;
