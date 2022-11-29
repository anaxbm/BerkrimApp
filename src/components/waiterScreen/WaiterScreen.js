import '../waiterScreen/waiterscreenstyle.css';
import Menu from '../Menu/Menu';
import Order from '../Order/Order';
const WaiterScreen = () => {
  return (
    <main className="main-waiter-section">
      <Menu />

      <Order />
    </main>
  );
};
export default WaiterScreen;
