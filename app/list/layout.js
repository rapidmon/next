export default function ListLayout({ children }) {
    return (
        <div>
            <div className="bottom-bar">
                <div>
                    <h4>하단 바 광고 1</h4>
                </div>
                <div>
                    <h4>하단 바 광고 1</h4>
                </div>
            </div>
            {children}
        </div>
    )
}