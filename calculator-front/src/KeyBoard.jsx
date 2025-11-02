import Button from "./components/Button";

const row_style = {
    display: "flex",
    flexDirection: "row",
    padding: '8px 8px'
}
const column_style = {
    display: "flex",
    flexDirection: "column",
}

function KeyBoard({buttonCallback, actionCallBack, equalCallback}) {
    const rows = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        ["+", 0, "-"],
        ["*", ":", "="]]

    return (
        <div style={column_style}>
            {rows.map((row, index) => (
                <div key={index} style={row_style}>
                    {
                        row.map((item_text, index) => {
                            let chosen_callback = null;
                            if (typeof item_text === "number") {
                                chosen_callback = buttonCallback
                            } else if (item_text === "=") {
                                chosen_callback = equalCallback;
                            } else chosen_callback = actionCallBack;
                            return (<Button text={item_text} callback={chosen_callback(item_text)} key={index} />)
                        })
                    }
                </div>
            ))}
        </div>
    )
}

export default KeyBoard;