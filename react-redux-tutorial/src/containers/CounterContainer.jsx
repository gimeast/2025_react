import Counter from "../components/Counter.jsx";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../modules/counter.js";
import { useCallback } from "react";

const CounterContainer = () => {
    const number = useSelector((state) => state.counter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => {
        dispatch(increase());
    }, [dispatch]);

    const deIncrease = useCallback(() => {
        dispatch(decrease());
    }, [dispatch]);

    return (
        <Counter
            number={number}
            onIncrease={onIncrease}
            onDecrease={deIncrease}
        />
    );
};

export default CounterContainer;
