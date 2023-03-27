import secondsToMinutes from '../functions/secondsToMinutes';

const ScoreBug = (props) => {
    const { game } = props;
    return (
        <div>
            <svg  xmlns="http://www.w3.org/2000/svg">
                <rect height="70" width="600" stroke="black" fill="transparent"></rect>
                <text x="25" y="25">{secondsToMinutes(game.time_seconds)}</text>
            </svg>
        </div>
    )
}

export default ScoreBug;