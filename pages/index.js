import Header from "components/header";
import Navbar from "components/navbar";
import Head from "next/head";
import Image from "next/image";
import { SlCreditCard } from "react-icons/sl";
import { BsCheckCircleFill, BsCircleFill } from "react-icons/bs";
import { useState } from "react";
import classNames from "classnames";

export default function Home() {
  const [paymentType, setPaymentType] = useState("credit");
  let iconSize = 20;
  return (
    <div>
      <Head>
        <title>Checkout page</title>
        <meta
          name="description"
          content="Checkout page with paystack dev integration"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Header />
        <Navbar />

        <form className="content" onSubmit={() => {}}>
          <div>
            <div className="payment-type segment">
              <h2 className="heading">Choose Payment</h2>
              <p
                onClick={() => setPaymentType("credit")}
                className={classNames("type", {
                  active: paymentType === "credit",
                })}
              >
                <SlCreditCard size={iconSize} /> Credit and Debit Card{" "}
                {paymentType === "credit" ? (
                  <BsCheckCircleFill size={iconSize + 10} className="check" />
                ) : null}
              </p>
              <p
                onClick={() => setPaymentType("paystack")}
                className={classNames("type", {
                  active: paymentType === "paystack",
                })}
              >
                <BsCircleFill size={iconSize} /> <span>Paystack</span>{" "}
                {paymentType === "paystack" ? (
                  <BsCheckCircleFill size={iconSize + 10} className="check" />
                ) : null}
              </p>
            </div>

            <div className="payment-detail segment">
              <h2 className="heading">Payment Detail</h2>
              <label htmlFor="name">Name On Card</label>
              <input type="text" name="name" id="name" placeholder="Pristia" />

              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="number"
                name="cardNumber"
                id="cardNumber"
                placeholder="0002010210201030"
              />

              <div className="flex-btw cols">
                <div className="flex-btw paired">
                  <label htmlFor="expires">MM/YY</label>
                  <input
                    type="number"
                    name="expires"
                    id="expires"
                    placeholder="05/2025"
                  />
                </div>
                <div className="paired flex-btw">
                  <label htmlFor="cvv">CVV</label>
                  <input type="number" name="cvv" id="cvv" placeholder="123" />
                </div>
              </div>

              <div className="flex-start save">
                <BsCheckCircleFill size={iconSize} />
                Save as default card
              </div>
            </div>

            <div className="delivery segment">
              <h2 className="heading flex-btw">
                Delivery <span>Edit</span>
              </h2>

              <p>Pristia Candra Arum</p>
              <p>Banyumanik Street no 14, Central Java Semarang Indonesia</p>
              <p>pristia@gmail.com</p>
              <p>0809210301002</p>
            </div>

            <div className="shipping segment">
              <h2 className="heading flex-btw">
                Shipping <span>Edit</span>
              </h2>

              <p>Pristia Candra Arum</p>
              <p>Banyumanik Street no 14, Central Java Semarang Indonesia</p>
              <p>pristia@gmail.com</p>
              <p>0809210301002</p>
            </div>

            <div className="billing segment">
              <h2 className="heading flex-btw">
                Billing <span>Edit</span>
              </h2>
              <p>Pristia Candra Arum</p>
              <p>Banyumanik Street no 14, Central Java Semarang Indonesia</p>
              <p>0809210301002</p>
            </div>
          </div>

          <div>
            <div className="summary segment">
              <h2 className="heading flex-btw">Order Summary</h2>
              <p>
                Subtotal <span>$119.32</span>
              </p>
              <p>
                Duties & Tax <span>$90</span>
              </p>
              <p>
                Delivery <span>$10</span>
              </p>
              <p className="total">
                Total <span>$219.32</span>
              </p>
            </div>

            <div className="items segment">
              <ul>
                <li className="flex-btw">
                  <div className="image"></div>
                  <div className="desc">
                    <p className="name">
                      Liverpul F.C. 21/22 Home Kit Goalkeeper
                    </p>
                    <span>Football . Size L . QTY 1</span>
                    <p>$59,66</p>
                  </div>
                </li>
                <li className="flex-btw">
                  <div className="image"></div>
                  <div className="desc">
                    <p className="name">F.C. Barselana 2021/22 Stadium Home</p>
                    <span>Football . Size L . QTY 1</span>
                    <p>$59,66</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="buttons">
            <button className="back">BACK</button>
            <button className="order">Place Order</button>
          </div>
        </form>
      </main>
    </div>
  );
}
