export interface TabElementProps {
    name: string;
    children?: React.ReactNode;
}

const TabElement: React.FC<TabElementProps> = ({name, children}) => {
    return (
        <>
            {children}
        </>
    );
};

export default TabElement;