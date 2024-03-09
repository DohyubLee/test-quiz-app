import useStore from "@stores/store";
import { Button } from "antd";
import React from "react";

function TestPage() {
  const { count, inc } = useStore();
  console.log("couhnt", count);
  return (
    <div>
      TestPage
      {count}
      <Button
        onClick={() => {
          inc();
        }}
      >
        +++
      </Button>
    </div>
  );
}

export default TestPage;
