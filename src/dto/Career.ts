import { Expose } from "class-transformer";

export default class Career {
    
  @Expose()
  private readonly _id: string;

  @Expose({name: 'firstName'})
  private _firstName: string;

  @Expose({name: 'lastName'})
  private _lastName: string;

  @Expose({name: 'email'})
  private _email: string;

  @Expose({name: 'phoneNumber'})
  private _phoneNumber: string;

  @Expose({name: 'address'})
  private _address: string;

  @Expose({name: 'applyFor'})
  private _applyFor: string;

  @Expose({name: 'experience'})
  private _experience: string;

  @Expose({name: 'currentCTC'})
  private _currentCTC: string;

  @Expose({name: 'expectedCTC'})
  private _expectedCTC: string;

  @Expose({name: 'resumeBase64'})
  private _resumeBase64: string;




  constructor(
    _id: string, 
    _firstName: string, 
    _lastName: string, 
    _email: string, 
    _phoneNumber: string, 
    _address: string, 
    _applyFor: string, 
    _experience: string, 
    _currentCTC: string, 
    _expectedCTC: string, 
    _resumeBase64: string
) {
    this._id = _id
    this._firstName = _firstName
    this._lastName = _lastName
    this._email = _email
    this._phoneNumber = _phoneNumber
    this._address = _address
    this._applyFor = _applyFor
    this._experience = _experience
    this._currentCTC = _currentCTC
    this._expectedCTC = _expectedCTC
    this._resumeBase64 = _resumeBase64
  }
 
    /**
     * Getter id
     * @return {string}
     */
     public get id(): string {
		return this._id;
	}

    /**
     * Getter firstName
     * @return {string}
     */
	public get firstName(): string {
		return this._firstName;
	}

    /**
     * Setter firstName
     * @param {string} value
     */
	public set firstName(value: string) {
		this._firstName = value;
	}

    /**
     * Getter lastName
     * @return {string}
     */
	public get lastName(): string {
		return this._lastName;
	}

    /**
     * Setter lastName
     * @param {string} value
     */
	public set lastName(value: string) {
		this._lastName = value;
	}

    /**
     * Getter email
     * @return {string}
     */
	public get email(): string {
		return this._email;
	}

    /**
     * Setter email
     * @param {string} value
     */
	public set email(value: string) {
		this._email = value;
	}

    /**
     * Getter phoneNumber
     * @return {string}
     */
	public get phoneNumber(): string {
		return this._phoneNumber;
	}

    /**
     * Setter phoneNumber
     * @param {string} value
     */
	public set phoneNumber(value: string) {
		this._phoneNumber = value;
	}

    /**
     * Getter address
     * @return {string}
     */
	public get address(): string {
		return this._address;
	}

    /**
     * Setter address
     * @param {string} value
     */
	public set address(value: string) {
		this._address = value;
	}

    /**
     * Getter applyFor
     * @return {string}
     */
	public get applyFor(): string {
		return this._applyFor;
	}

    /**
     * Setter applyFor
     * @param {string} value
     */
	public set applyFor(value: string) {
		this._applyFor = value;
	}

    /**
     * Getter experience
     * @return {string}
     */
	public get experience(): string {
		return this._experience;
	}

    /**
     * Setter experience
     * @param {string} value
     */
	public set experience(value: string) {
		this._experience = value;
	}

    /**
     * Getter currentCTC
     * @return {string}
     */
	public get currentCTC(): string {
		return this._currentCTC;
	}

    /**
     * Setter currentCTC
     * @param {string} value
     */
	public set currentCTC(value: string) {
		this._currentCTC = value;
	}

    /**
     * Getter expectedCTC
     * @return {string}
     */
	public get expectedCTC(): string {
		return this._expectedCTC;
	}

    /**
     * Setter expectedCTC
     * @param {string} value
     */
	public set expectedCTC(value: string) {
		this._expectedCTC = value;
	}

    /**
     * Getter resumeBase64
     * @return {string}
     */
	public get resumeBase64(): string {
		return this._resumeBase64;
	}

    /**
     * Setter resumeBase64
     * @param {string} value
     */
	public set resumeBase64(value: string) {
		this._resumeBase64 = value;
	}


}