import TabElement from "../../components/utils/Tabs/TabElement/TabElement";
import Tabs from "../../components/utils/Tabs/Tabs";

const PokemonsPage = () => {
    return (
        <div style={{width: '100%', height: 500, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Tabs>
                    <TabElement name="1">
                        <h1>1</h1>
                    </TabElement>
                    <TabElement name="2">
                        <h1>2</h1>
                    </TabElement>
                </Tabs>
            </div>
        </div>
    );
};

export default PokemonsPage;