import React from "react";
import styles from "./ShoppingCart.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { appContext } from "../AppState";
//数据的传递
interface Props {}
//组件自己的状态
interface State {
	isOpen: boolean;
}
class ShoppingCart extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			isOpen: false,
		};
	}

	// 要用箭头函数定义函数
	handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		console.log("e.target", e.target);
		console.log("e.currentTarget", e.currentTarget);
		if ((e.target as HTMLElement).nodeName === "SPAN") {
			this.setState({ isOpen: !this.state.isOpen });
		}
	};
	render() {
		return (
			<appContext.Consumer>
				{(value) => {
					return (
						<div className={styles.cartContainer}>
							<button onClick={this.handleClick} className={styles.button}>
								<FiShoppingCart></FiShoppingCart>
								<span>{`购物车${value.shoppingCart.items.length}(件)`}</span>
							</button>
							<div
								className={styles.cartDropDown}
								style={{ display: this.state.isOpen ? "block" : "none" }}
							>
								<ul>
									{value.shoppingCart.items.map((item) => {
										return <li key={item.id}>{item.name}</li>;
									})}
								</ul>
							</div>
						</div>
					);
				}}
			</appContext.Consumer>
		);
	}
}
export default ShoppingCart;
