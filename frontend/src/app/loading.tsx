import { dummyLoadingLines } from "@/data/dummy/data.lists";
import { generateRandomInt } from "@/helper/common";
import Image from "next/image";

const loading = () => {
  return (
    <div
      className="gcc"
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "var(--dark-bg)",
      }}
    >
      <div className="fcc">
        <Image
          src={"/images/loading1.gif"}
          alt="loading"
          width={100}
          height={100}
        />
        <h4
          className="mt15 semi"
          style={{
            opacity: 0.8,
            color: "#d5d5d5",
            maxWidth: 400,
            textAlign: "center",
          }}
        >
          {
            dummyLoadingLines[
              generateRandomInt(dummyLoadingLines.length - 1, 0)
            ]
          }
        </h4>
      </div>
    </div>
  );
};

export default loading;
