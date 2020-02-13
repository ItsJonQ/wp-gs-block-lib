import React from "react";
import styled from "@emotion/styled";

function CoverBlock() {
  return (
    <CoverView>
      <h1>Hello</h1>
    </CoverView>
  );
}

function App() {
  return (
    <div className="App">
      <BlockPreviews />
      <CoverBlock />
    </div>
  );
}

export default App;

function BlockPreviews() {
  return (
    <PreviewGridView>
      <Preview>
        <CoverBlock />
      </Preview>
      <Preview>
        <SplitCoverBlock />
      </Preview>
    </PreviewGridView>
  );
}

function Preview({ children }) {
  return (
    <PreviewThumbView>
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

const PreviewGridView = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 20px;
  max-width: 300px;
`;

const PreviewThumbView = styled.div`
  width: 100%;
  height: 80px;
  position: relative;
  overflow: hidden;
  opacity: 1;
  transition: all 300ms ease;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
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

const CoverView = styled.div`
  background: yellow;
  color: green;
  padding: 30vh 20px;
  max-height: 960px;
  text-align: center;
`;

const SplitCoverBlockView = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 20px;
  background: yellow;
  color: green;
  padding: 30vh 20px;
  max-height: 960px;
`;

const InnerGridCenterView = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
