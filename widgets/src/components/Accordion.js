import React, {useState} from "react";

const Accordion = ({items}) => {

    const [activeIndex, setActriveIndex] = useState(null);

    const onTitleClicked = (index) => {
        setActriveIndex(index);
    };

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';

        return (
            <React.Fragment key={item.title}>
                <div className={`title ${active}`} onClick={() => onTitleClicked(index)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    });

    return (
        <div>
            <div className="ui styled accordion">{renderedItems}</div>
        </div>
    );
};

export default Accordion;
