import React, { useContext } from "react";
import styles from "./Robot.module.css";
import { appContext } from "../AppState";
import { appSetStateContext } from "../AppState";
interface RobotProps {
	id: number;
	name: string;
	email: string;
}
const RobotDiscount: React.FC<RobotProps> = (props) => {
	const { id, name, email } = props;
	const value = useContext(appContext);
	const setState = useContext(appSetStateContext);
	const addToCart = () => {
		if (setState) {
			setState((state) => {
				console.log(state);
				return {
					...state,
					shoppingCart: { items: [...state.shoppingCart.items, { id, name }] },
				};
			});
		}
	};
	return (
		<div className={styles.cardContainer}>
			<img src={`https://robohash.org/${id}`} alt="robot" />
			<h2>打折商品</h2>
			<h2>{`${id}-${name}`}</h2>
			<p>{email}</p>
			<p>作者：{value.username}</p>
			<button onClick={addToCart}>加入购物车</button>
		</div>
	);
};
export default RobotDiscount;
