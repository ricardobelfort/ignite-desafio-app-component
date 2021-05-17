import { useEffect, useState } from 'react';
import { Button, ButtonIconName } from './Button';
import '../styles/sidebar.scss';

export interface Itabs {
  id: number;
  title: string;
  name: ButtonIconName;
}

interface IProps {
  tabs: Itabs[];
  onClickTabs(id: number): void;
}

const SideBar: React.FC<IProps> = ({ tabs, onClickTabs, children }) => {
  const [selectedTabsId, setSelectedTabsId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedTabsId(id);
  }

  useEffect(() => {
    onClickTabs(selectedTabsId);
  }, [selectedTabsId]);

  // Complete aqui
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>
      {children}
      <div className="buttons-container">
        {tabs.map((tab) => (
          <Button
            key={String(tab.id)}
            title={tab.title}
            iconName={tab.name}
            onClick={() => handleClickButton(tab.id)}
            selected={selectedTabsId === tab.id}
          />
        ))}
      </div>
    </nav>
  );
};

export default SideBar;
