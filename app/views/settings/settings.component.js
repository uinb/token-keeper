import React, { Component } from 'react';
import './styles.css';
import Button from '@material-ui/core/Button';
import Close from '../../images/close.svg';
import SettingAccountDetails from '../../components/account/setting-account-info';
import ManageAccount from '../../images/manage_account.svg';
import ArrowRight from '../../images/arrow_right.svg';

export default class Settings extends Component {
  handleClose = () => {
    this.props.changePage(this.props.backupPage);
  };

  render() {
    const { account } = this.props;
    const settingLists = [
      {
        name: 'Address Book',
      },
      {
        name: 'Terms Of Use',
      },
      {
        name: 'About Clover Wallet Extension',
      },
    ];
    return (
      <div className="container">
        <div style={{ height: '470px', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>
          <SettingAccountDetails alias={account.alias} address={account.address} />
          <Button variant="contained" className="manage-account-btn">
            <img
              width="22"
              height="22"
              src={ManageAccount}
              aria-hidden="true"
              alt="staking"
              style={{ marginRight: '10px' }}
            />
            MANAGE ACCOUNTS
          </Button>
          <div className="setting-list-wrap">
            {settingLists.map((setting, idx) => (
              <SettingList settingName={setting.name} key={`setting_${idx.toString()}}`} />
            ))}
          </div>
        </div>
        <div className="footer" onClick={this.handleClose}>
          <img src={Close} alt="close" aria-hidden="true" width="20" />
          <span className="close">CLOSE</span>
        </div>
      </div>
    );
  }
}

class SettingList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <div className="setting-list-item">
        <div className="setting-list-left">
          <span>{this.props.settingName}</span>
        </div>
        <div className="setting-list-right">
          <img src={ArrowRight} alt="" />
        </div>
      </div>
    );
  }
}
