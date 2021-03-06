import * as React from 'react';
import {
    NavItem
} from 'react-bootstrap';

import { Tree } from '../createTree';

interface Props {
    tree: Tree;
    step: number;
    version: string;
    pkgName: string;
}

export default function Leaf(props: Props) {
    const { tree, step, version, pkgName } = props;

    const keys = tree.subItems ? Object.keys(tree.subItems) : [];

    return (
        <NavItem style={{ paddingLeft: step * 10 }}>
            {
                tree.index === undefined
                ? tree.name
                : (
                    <a href={`/component/${tree.index}`}>
                        {tree.name}
                    </a>
                )
            }
            {
                keys.map(key => (
                    <Leaf
                        pkgName={pkgName}
                        key={key}
                        version={version}
                        step={step + 1}
                        tree={tree.subItems[key]}
                    />
                ))
            }
        </NavItem>
    );
}