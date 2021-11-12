import React, { useContext } from "react";
import styles from "./Robot.module.css";
import { appContext } from "../AppState";
import { withAddToCart } from "./AddToCart";
// 引入自定义Hook
import { useAddToCart } from "./AddToCart";
interface RobotProps {
	id: number;
	name: string;
	email: string;
	// addToCart: Function;
}
const RobotDiscount: React.FC<RobotProps> = (props) => {
	const { id, name, email } = props;
	// 使用自定义Hook
	const addToCart = useAddToCart();
	const value = useContext(appContext);
	return (
		<div className={styles.cardContainer}>
			<img src={`https://robohash.org/${id}`} alt="robot" />
			<h2>打折商品</h2>
			<h2>{`${id}-${name}`}</h2>
			<p>{email}</p>
			<p>作者：{value.username}</p>
			<button onClick={() => addToCart(id, name)}>加入购物车</button>
		</div>
	);
};
export default withAddToCart(RobotDiscount);
