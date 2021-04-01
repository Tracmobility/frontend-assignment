import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import MuiVirtualizedTable from "./MuiVirtualizedTable";
import { useSelector } from "react-redux";

const TableOfVehicleData = () => {
  const styles = (theme) => ({
    flexContainer: {
      display: "flex",
      alignItems: "center",
      boxSizing: "border-box",
    },
    table: {
      "& .ReactVirtualized__Table__headerRow": {
        flip: false,
        paddingRight: theme.direction === "rtl" ? "0 !important" : undefined,
        backgroundColor: "#03989E",
      },
    },
    tableRow: {
      cursor: "pointer",
    },
    tableRowHover: {
      "&:hover": {
        backgroundColor: theme.palette.grey[200],
      },
    },
    tableCell: {
      flex: 1,
    },
    noClick: {
      cursor: "initial",
    }
  });

  const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

  const vehicleData = useSelector((state) => state.vehicleData.vehicleData);

  const rows = [];
  for (let i = 0; i < vehicleData.length; i += 1) {
    const batteryPercentage = (vehicleData[i]["batteryLevel"] * 100).toFixed(0);
    const data = {
      id: i,
      uuid: vehicleData[i]["uuid"],
      qrCode: vehicleData[i]["qrCode"],
      categoryOfVehicle: vehicleData[i]["category"],
      percentageOfBatteryRemaining: batteryPercentage,
      status: vehicleData[i]["status"],
      lockStatus: vehicleData[i]["lockStatus"],
    };
    rows.push(data);
  }

  return (
    <Paper style={{ height: "50vh", width: "80%" }}>
      <VirtualizedTable
        rowCount={rows.length}
        rowGetter={({ index }) => rows[index]}
        columns={[
          {
            width: 300,
            label: "UUID",
            dataKey: "uuid",
          },
          {
            width: 300,
            label: "QR Code",
            dataKey: "qrCode",
            numeric: false,
          },
          {
            width: 200,
            label: "Category Of Vehicle",
            dataKey: "categoryOfVehicle",
            numeric: false,
          },
          {
            width: 200,
            label: "Battery % Remaining",
            dataKey: "percentageOfBatteryRemaining",
            numeric: false,
          },
          {
            width: 200,
            label: "Status",
            dataKey: "status",
            numeric: false,
          },
          {
            width: 200,
            label: "Lock Status",
            dataKey: "lockStatus",
            numeric: false,
          },
        ]}
      />
    </Paper>
  );
};

export default TableOfVehicleData;
