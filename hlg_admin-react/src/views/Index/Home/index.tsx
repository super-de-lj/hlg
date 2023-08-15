import './index.scss';

const Home = () => {
    return (
        <div className='home'>
            <div className="item">
                <span>新增用户</span>
                <div>112，893</div>
            </div>
            <div className="item">
                <span>同比新增</span>
                <div>112，893%</div>
            </div>
            <div className="item">
                <span>新增交易额</span>
                <div>112，893</div>
            </div>
            <div className="item">
                <span>同比新增</span>
                <div>112，893%</div>
            </div>
        </div>
    );
};

export default Home;