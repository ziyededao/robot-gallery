import React, { useContext } from "react";
import styles from "./Robot.module.css";
import { appContext } from "../AppState";
import { withAddToCart } from "./AddToCart";
export interface RobotProps {
	id: number;
	name: string;
	email: string;
	addToCart: Function;
}

const Robot: React.FC<RobotProps> = (props) => {
	const { id, name, email, addToCart } = props;
	const value = useContext(appContext);
	return (
		<div className={styles.cardContainer}>
			<img src={`https://robohash.org/${id}`} alt="robot" />
			<h2>{`${id}-${name}`}</h2>
			<p>{email}</p>
			<p>作者：{value.username}</p>
			<button onClick={() => addToCart(id, name)}>加入购物车</button>
		</div>
	);
};

// 使用高阶组件
export default withAddToCart(Robot);
