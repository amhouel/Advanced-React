import Link from 'next/link';
const Home = props => {
    return (
        <div>
            <Link href="/Sell">
                <a>Sell!</a>
            </Link>

            <p>Hey</p>
        </div>
    );
}

export default Home;