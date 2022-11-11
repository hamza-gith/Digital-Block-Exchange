import React from "react";
import "./style.css";
import { Input, Tabs } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import DataTable from "react-data-table-component";
import Button from "@mui/material/Button";
import { DownOutlined } from "@ant-design/icons";
import { Snackbar } from "@mui/material";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";

import PropTypes from "prop-types";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import XummLogo from "./../../Images/XummLogo.png";
import LedgerLogo from "./../../Images/LedgerLogo.png";

import { setModalOpen, connectWallet } from "../../redux/actions";

import { useSelector, useDispatch } from "react-redux";

const MethodButton = styled(Button)({
  backgroundColor: "#E7E8EA4D",
  border: "1px solid #E7E8EA4D",
  color: "#000",
  width: "100%",
  margin: "5px",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  flexDirection: "column",
  height: "56px",
});

const ActionButton = styled(Button)({
  background: "linear-gradient(to right, #A7D63FE5, #39B54A, #9FD340)",
  border: "none",
  color: "#fff",
  width: "100%",
  margin: "5px",
  display: "flex",
  justifyContent: "space-evenly",
  flexDirection: "column",
  height: "56px",
  borderRadius: "12px",
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    width: "373px",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(2),
    width: "373px",
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const NotificationDiv = styled(Snackbar)({
  backgroundColor: "#F5F5F5",
  color: "#000",
  fontSize: "14px",
  borderRadius: "12px",
  border: "1px solid #39B54A",
});

const { TabPane } = Tabs;

const columns = [
  {
    name: "Pair",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Price",
    selector: (row) => row.year,
    center: true,
  },
  {
    name: "24h Chg",
    cell: (row) => {
      return (
        <div>
          {row.stat > 0 ? (
            <p className="colorisgreen22">{row.stat}</p>
          ) : (
            <p className="colorisred22">{row.stat}</p>
          )}
        </div>
      );
    },
    sortable: true,
    right: true,
  },
];

const data = [
  {
    id: 1,
    title: "BTR/USDT",
    year: "1988",
    stat: "-22.45",
  },
  {
    id: 2,
    title: "BTR/USDT",
    year: "1984",
    stat: "-22.45",
  },
  {
    id: 3,
    title: "BTR/USDT",
    year: "1984",
    stat: "22.45",
  },
  {
    id: 1,
    title: "BTR/USDT",
    year: "1988",
    stat: "-22.45",
  },
  {
    id: 2,
    title: "BTR/USDT",
    year: "1984",
    stat: "-22.45",
  },
  {
    id: 3,
    title: "BTR/USDT",
    year: "1984",
    stat: "22.45",
  },
  {
    id: 1,
    title: "BTR/USDT",
    year: "1988",
    stat: "-22.45",
  },
  {
    id: 2,
    title: "BTR/USDT",
    year: "1984",
    stat: "-22.45",
  },
  {
    id: 3,
    title: "ETH/USDT",
    year: "1984",
    stat: "22.45",
  },
  {
    id: 1,
    title: "ETH/USDT",
    year: "1988",
    stat: "-22.45",
  },
  {
    id: 2,
    title: "ETH/USDT",
    year: "1984",
    stat: "-22.45",
  },
  {
    id: 3,
    title: "ETH/USDT",
    year: "1984",
    stat: "22.45",
  },
];
function ExchangeRatesComponent2() {
  const dispatch = useDispatch();
  const connectModalVisible = useSelector(
    (state) => state.authReducer.isModalOpen
  );
  const walletConnected = useSelector(
    (state) => state.authReducer.isWalletConnected
  );

  const handleClose = () => {
    dispatch(setModalOpen(false));
  };
  function callback(key) {
    console.log(key);
  }
  return (
    <div className="firstDivofrates22">
      <Input
        className="inputofsearchbarofexchange22"
        placeholder="Search"
        prefix={<SearchOutlined />}
      />
      <Tabs
        centered={true}
        className="tabsofexchangerates"
        defaultActiveKey="1"
        onChange={callback}
        style={{ width: "100%" }}
      >
        <TabPane tab="BTC" key="1">
          <DataTable
            fixedHeader
            fixedHeaderScrollHeight="400px"
            columns={columns}
            data={data}
          />
        </TabPane>
        <TabPane tab="USDT" key="2">
          <DataTable
            fixedHeader
            fixedHeaderScrollHeight="400px"
            columns={columns}
            data={data}
          />{" "}
        </TabPane>
        <TabPane tab="USDC" key="3">
          <DataTable
            fixedHeader
            fixedHeaderScrollHeight="400px"
            columns={columns}
            data={data}
          />{" "}
        </TabPane>
        <TabPane tab="ALTS" key="4">
          <DataTable
            fixedHeader
            fixedHeaderScrollHeight="400px"
            columns={columns}
            data={data}
          />{" "}
        </TabPane>
        <TabPane tab="ETF" key="5">
          <DataTable
            fixedHeader
            fixedHeaderScrollHeight="400px"
            columns={columns}
            data={data}
          />{" "}
        </TabPane>
      </Tabs>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={connectModalVisible}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <h2>Select Wallet</h2>
        </BootstrapDialogTitle>
        <DialogContent style={{ minHeight: "300px", overflowX: "hidden" }}>
          <p style={{ color: "#8F8F80", fontSize: "12px" }}>
            Connect your wallet using one of the following methods:
          </p>
          <MethodButton onClick={() => dispatch(connectWallet(true))}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "flex-start",
                width: "60%",
              }}
            >
              <img
                src={XummLogo}
                alt=""
                style={{ width: "20px", height: "20px", marginRight: "5px" }}
              />
              <span style={{ fontSize: "18px", fontStyle: "bold" }}>
                XUMM App
              </span>
            </div>
          </MethodButton>
          <MethodButton onClick={() => dispatch(connectWallet(true))}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "flex-start",
                width: "60%",
              }}
            >
              <img
                src={LedgerLogo}
                alt=""
                style={{ width: "20px", height: "20px", marginRight: "5px" }}
              />
              <span style={{ fontSize: "18px", fontStyle: "bold" }}>
                Ledger Device
              </span>
            </div>
            <span
              style={{
                fontSize: "12px",
                fontStyle: "bold",
                color: "red",
                textAlign: "right",
                width: "100%",
              }}
            >
              {" "}
              Coming soon
            </span>
          </MethodButton>
        </DialogContent>
        <DialogActions>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            <span style={{ color: "#8F8F80", fontSize: "12px" }}>
              Don’t have a wallet?
            </span>
            <ActionButton autoFocus onClick={handleClose}>
              <span style={{ fontSize: "18px", fontStyle: "bold" }}>
                Create New Wallet
              </span>
              <span
                style={{
                  fontSize: "12px",
                  fontStyle: "bold",
                  color: "red",
                  textAlign: "right",
                  width: "100%",
                }}
              >
                {" "}
                Coming soon
              </span>
            </ActionButton>
          </div>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

export default ExchangeRatesComponent2;
