import React, { ReactElement } from 'react';

import { NavigationItemProps, TreeNode } from '../types';

const buildTree = (children: ReactElement<NavigationItemProps>): TreeNode[] => {
  if (children) {
    return React.Children.map(
      children,
      (child: ReactElement<NavigationItemProps>) => ({
        id: child.props.id,
        title: child.props.title,
        children:
          child.props.children &&
          buildTree(child.props.children as ReactElement<NavigationItemProps>),
      }),
    ) as TreeNode[];
  }

  return [];
};

export default buildTree;
