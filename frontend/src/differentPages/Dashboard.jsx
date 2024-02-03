import toast, { Toaster } from "react-hot-toast";
import { AppBarComponent } from "../components/AppbarComponent";
import { BalanceComponent } from "../components/BalanceComponent";
import { UsersComponent } from "../components/UsersComponent";
import { useSearchParams } from "react-router-dom";

export function Dashboard() {
  function showBalance(balance) {
    toast(`Available balance: Rs ${balance}`);
  }

  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  return (
    <>
      <Toaster />
      <div className="dashboard">
        <AppBarComponent user={name} />
        <BalanceComponent showBalance={showBalance} />
        <UsersComponent />
      </div>
    </>
  );
}
