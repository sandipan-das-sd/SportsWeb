
import PropTypes from 'prop-types';
 // Ensure this is the correct path to your icon or image

export default function StatusCard({
    color,
    icon,
    title,
    amount,
    percentage,
    percentageColor,
    percentageIcon,
    date,
}) {
    return (
        <div className="px-4 mb-10">
            <div className={`bg-${color}-500 text-white rounded-lg shadow-md p-6 flex items-center justify-between`}>
                <div className="flex items-center">
                    <img src={icon} alt="icon" className="w-12 h-12" /> {/* Use img tag for icon */}
                    <h2 className="ml-4 text-2xl font-bold">{title}</h2>
                </div>
                <div className="text-right">
                    <h3 className="text-3xl font-semibold">{amount}</h3>
                    <div className={`text-${percentageColor}-500 flex items-center justify-end mt-2`}>
                        <img src={percentageIcon} alt="percentage icon" className="w-4 h-4" /> {/* Use img tag for percentage icon */}
                        <p className="ml-2">{percentage}</p>
                    </div>
                    <p className="text-xs">{date}</p>
                </div>
            </div>
        </div>
    );
}

StatusCard.propTypes = {
    color: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    percentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    percentageColor: PropTypes.string.isRequired,
    percentageIcon: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};
