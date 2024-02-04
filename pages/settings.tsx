import type { NextPage } from 'next';
import cls from 'classnames';

import utilsStyles from '@styles/utils.module.scss';
import styles from '@styles/settingsPage.module.scss';
import ColoredIcon, { ICON_COLOR } from '@components/ColoredIcon/ColoredIcon';
import Card, { CARD_SIZE } from '@components/Card/Card';
import Header from '@components/Header/Header';
import Anchor from '@components/Anchor/Anchor';
import Head from '@components/Head/Head';
import Document from '@icons/document.svg';
import config from '@constants/config.json';
import { validateUrl } from '@utils/misc';

const Settings: NextPage = () => {
  return (
    <>
      <Head title='Settings' description='Settings' />
      <Header />
      <main className={cls(utilsStyles.main, styles.settings)}>
        <div className={utilsStyles.spacer3} />
        <Anchor
          active
          href={validateUrl(config.about) ? config.about : '/about'}
          openInNewTab={validateUrl(config.about)}
        >
          <Card className={utilsStyles.rowAlignCenter} size={CARD_SIZE.large}>
            <ColoredIcon icon={Document} size={24} color={ICON_COLOR.primary} className={styles.icon} />
            <p className={styles.settingLabel}>About</p>
          </Card>
        </Anchor>
        <div className={utilsStyles.spacer2} />
        <Anchor
          active
          href={validateUrl(config.termsAndConditions) ? config.termsAndConditions : '/termsAndConditions'}
          openInNewTab={validateUrl(config.termsAndConditions)}
        >
          <Card className={utilsStyles.rowAlignCenter} size={CARD_SIZE.large}>
            <ColoredIcon icon={Document} size={24} color={ICON_COLOR.primary} className={styles.icon} />
            <p className={styles.settingLabel}>Terms & Conditions</p>
          </Card>
        </Anchor>
      </main>
    </>
  );
};

export default Settings;
