// // 添加进购物车的逻辑
import React, { useContext } from "react";
import { appSetStateContext } from "../AppState";
import { RobotProps } from "./Robot";

// 高阶组件
export const withAddToCart = (
	ChildComponent: React.ComponentType<RobotProps>
) => {
	return (props: RobotProps) => {
		const setState = useContext(appSetStateContext);
		const addToCart = (id: number, name: string) => {
			if (setState) {
				setState((state) => {
					console.log(state);
					return {
						...state,
						shoppingCart: {
							items: [...state.shoppingCart.items, { id, name }],
						},
					};
				});
			}
		};
		return <ChildComponent {...props} addToCart={addToCart} />;
	};
};

// 自定义Hook(函数返回函数，实际上是一个闭包)
export const useAddToCart = () => {
	const setState = useContext(appSetStateContext);
	const addToCart = (id: number, name: string) => {
		if (setState) {
			setState((state) => {
				console.log(state);
				return {
					...state,
					shoppingCart: {
						items: [...state.shoppingCart.items, { id, name }],
					},
				};
			});
		}
	};
	return addToCart;
};
