import React, { useState } from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const blocks = {
  CoverBlock,
  SplitCoverBlock
};

function CoverBlock() {
  return (
    <CoverView>
      <h1>Hello</h1>
    </CoverView>
  );
}

function App() {
  const [currentBlock, setCurrentBlock] = useState(Object.keys(blocks)[0]);
  const CurrentBlockComponent = blocks[currentBlock];

  return (
    <Layout>
      <Sidebar>
        <BlockPreviews
          currentBlock={currentBlock}
          setCurrentBlock={setCurrentBlock}
        />
      </Sidebar>
      <Body>
        <CurrentBlockComponent />
      </Body>
    </Layout>
  );
}

export default App;

function BlockPreviews({ currentBlock, setCurrentBlock }) {
  const blockKeys = Object.keys(blocks);

  return (
    <PreviewGridView>
      {blockKeys.map(block => {
        const BlockComponent = blocks[block];

        return (
          <Preview
            isActive={currentBlock === block}
            key={block}
            onClick={() => setCurrentBlock(block)}
          >
            <BlockComponent />
          </Preview>
        );
      })}
    </PreviewGridView>
  );
}

function Preview({ children, ...props }) {
  return (
    <PreviewThumbView {...props}>
      <PreviewContentView>{children}</PreviewContentView>
    </PreviewThumbView>
  );
}

function SplitCoverBlock() {
  return (
    <SplitCoverBlockView>
      <InnerGridCenterView>
        <h1>Hello</h1>
      </InnerGridCenterView>
      <InnerGridCenterView>
        <p>There</p>
      </InnerGridCenterView>
    </SplitCoverBlockView>
  );
}

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 300px 1fr;
`;

const Sidebar = styled.div`
  height: 100vh;
  overflow-y: auto;
  padding: 20px;
`;

const Body = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const PreviewGridView = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 20px;
  max-width: 300px;
`;

const PreviewThumbView = styled.button`
  border: 2px solid transparent;
  display: block;
  width: 100%;
  height: 80px;
  position: relative;
  overflow: hidden;
  opacity: 1;
  transition: all 300ms ease;
  cursor: pointer;
  outline: none;

  &:hover,
  &:focus {
    opacity: 0.5;
  }

  ${({ isActive }) => isActive && css({ border: "2px solid blue" })}
`;

const PreviewContentView = styled.div`
  transform: translate(-25%, -25%) scale(0.5);
  transform-origin: top left;
  width: 200%;
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none;
  user-select: none;
`;

const BaseCoverView = styled.div`
  background: yellow;
  color: green;
  padding: 30vh 20px;
  max-height: 960px;
  width: 100%;
`;

const CoverView = styled(BaseCoverView)`
  text-align: center;
`;

const SplitCoverBlockView = styled(BaseCoverView)`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 20px;
`;

const InnerGridCenterView = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
