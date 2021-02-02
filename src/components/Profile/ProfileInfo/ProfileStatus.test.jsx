import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatusComponent", () => {
  test("after creation span shold be displayed", () => {
    const component = create(<ProfileStatus status={"socialNetwork"} />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span).not.toBeNull();
  });
  test("after creation span shold contain correct status", () => {
    const component = create(<ProfileStatus status={"socialNetwork"} />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children[0]).toBe("socialNetwork");
  });
  test("status fom props should be in the state", () => {
    const component = create(<ProfileStatus status={"socialNetwork"} />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("socialNetwork");
  });
  test("after creation input shold not be displayed", () => {
    const component = create(<ProfileStatus status={"socialNetwork"} />);
    const root = component.root;
    expect(() => {
      let input = root.findByType("input");
    }).toThrow();
  });
  test("input should be displayed in editMode instead of span", () => {
    const component = create(<ProfileStatus status={"socialNetwork"} />);
    const root = component.root;

    let span = root.findByType("span");
    span.props.onDoubleClick();

    let input = root.findByType("input");
    expect(input.props.value).toBe("socialNetwork");
  });
  test("callback should be called", () => {
    const mockCallBack = jest.fn();
    const component = create(
      <ProfileStatus status={"socialNetwork"} updateStatus={mockCallBack} />
    );
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallBack.mock.calls.length).toBe(1);
  });
});
