import React from "react";
import Tab from "@material-tailwind/react/Tab";
import TabList from "@material-tailwind/react/TabList";
import TabItem from "@material-tailwind/react/TabItem";
import TabContent from "@material-tailwind/react/TabContent";
import TabPane from "@material-tailwind/react/TabPane";
import Icon from "@material-tailwind/react/Icon";
import { useState} from "react";

export default function CustomTab() {
    const [openTab, setOpenTab] = useState(1);

    return (
        <Tab>
            <TabList color="lightBlue">
                <TabItem
                    onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(1);
                    }}
                    ripple="light"
                    active={openTab === 1 ? true : false}
                    href="tabItem"
                >
                    <Icon name="language" size="lg" />
                    Discover
                </TabItem>
                <TabItem
                    onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(2);
                    }}
                    ripple="light"
                    active={openTab === 2 ? true : false}
                    href="tabItem"
                >
                    <Icon name="account_circle" size="lg" />
                    Profile
                </TabItem>
                <TabItem
                    onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(3);
                    }}
                    ripple="light"
                    active={openTab === 3 ? true : false}
                    href="tabItem"
                >
                    <Icon name="settings" size="lg" />
                    Settings
                </TabItem>
            </TabList>

            <TabContent>
                <TabPane active={openTab === 1 ? true : false}>
                    <p>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things
                        could be at. So when you get something that has the name Kanye
                        West on it, it’s supposed to be pushing the furthest
                        possibilities. I will be the leader of a company that ends up
                        being worth billions of dollars, because I got the answers. I
                        understand culture. I am the nucleus.
                    </p>
                </TabPane>
                <TabPane active={openTab === 2 ? true : false}>
                    <p>
                        I will be the leader of a company that ends up being worth
                        billions of dollars, because I got the answers. I understand
                        culture. I am the nucleus. I think that’s a responsibility that
                        I have, to push possibilities, to show people, this is the level
                        that things could be at. I think that’s a responsibility that I
                        have, to push possibilities, to show people, this is the level
                        that things could be at.
                    </p>
                </TabPane>
                <TabPane active={openTab === 3 ? true : false}>
                    <p>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things
                        could be at. So when you get something that has the name Kanye
                        West on it, it’s supposed to be pushing the furthest
                        possibilities. I will be the leader of a company that ends up
                        being worth billions of dollars, because I got the answers. I
                        understand culture. I am the nucleus.
                    </p>
                </TabPane>
            </TabContent>
        </Tab>
    );
}