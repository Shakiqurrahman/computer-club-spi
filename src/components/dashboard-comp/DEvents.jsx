
import event1 from '../../assets/dashboard/event1.jpg'
import event2 from '../../assets/dashboard/event2.jpg'

const DEvents = () => {
    return (
        <div className='w-full bg-white shadow rounded-lg p-4 xl:p-6'>
           <h1 className='text-xl font-bold text-secondary'>Ongoing Event</h1>
           <div className='grid grid-cols-2 gap-10 mt-3 mb-10'>
            <div className='text-center'>
                <img className='rounded-t-xl' src={event1} alt="event image" />
                <h2 className='text-xl font-semibold text-secondary mt-2'>Night Music Concert</h2>
                <p>30 March, 7:30 PM</p>
            </div>
            <div className='text-center'>
                <img className='rounded-t-xl' src={event1} alt="event image" />
                <h2 className='text-xl font-semibold text-secondary mt-2'>21st February</h2>
                <p>21 February, 7:30 PM</p>
            </div>
           </div>
           <h1 className='text-xl font-bold text-secondary'>Upcoming Event</h1>
           <div className='grid grid-cols-2 gap-10 mt-3'>
            <div className='text-center'>
                <img className='rounded-t-xl' src={event2} alt="event image" />
                <h2 className='text-xl font-semibold text-secondary mt-2'>Night Music Concert</h2>
                <p>30 March, 7:30 PM</p>
            </div>
            <div className='text-center'>
                <img className='rounded-t-xl' src={event2} alt="event image" />
                <h2 className='text-xl font-semibold text-secondary mt-2'>21st February</h2>
                <p>21 February, 7:30 PM</p>
            </div>
           </div>
        </div>
    );
};

export default DEvents;