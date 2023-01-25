const PageTitle = (props) => {
    return (
        <>
            <div className="page-title bg-white">
                {props.children}
            </div>
        </>
    );
}
export default PageTitle;