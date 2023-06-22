import React, { useState, useEffect } from "react";
import './feedbackForm.css';

function FeedbackForm() {
    const [showForm, setShowForm] = useState(true);
    const [answerFound, setAnswerFound] = useState('');
    const [ruleMatch, setRuleMatch] = useState('');
    const [suggestions, setSuggestions] = useState('');
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate the form
        const validationErrors = {};
        if (!answerFound) {
          validationErrors.answerFound = '*Please select an option';
        }
        if (!ruleMatch) {
          validationErrors.ruleMatch = '*Please select an option';
        }
        if (!suggestions) {
          validationErrors.suggestions = '*Please provide your suggestions';
        }
    
        // If there are validation errors, set the state and return
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          return;
        }
    
        // Handle form submission logic here
        console.log(answerFound, ruleMatch, suggestions);
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false); // Reset the submission status
        }, 1000);
        setAnswerFound('')
        setRuleMatch('')
        setSuggestions('')
        setShowForm(false); // Close the feedback form after submission
        setErrors({}); // Clear any existing errors
    };
    const handleAnswerFoundChange = (e) => {
        setAnswerFound(e.target.value);
        setErrors({ ...errors, answerFound: '' }); // Clear error for answerFound
      };
      
      const handleRuleMatchChange = (e) => {
        setRuleMatch(e.target.value);
        setErrors({ ...errors, ruleMatch: '' }); // Clear error for ruleMatch
      };
      
      const handleSuggestionsChange = (e) => {
        setSuggestions(e.target.value);
        setErrors({ ...errors, suggestions: '' }); // Clear error for suggestions
      };

    const handleOpenForm = () => {
        setShowForm(true);
      };
    
      const handleCloseForm = () => {
        setShowForm(false);
      };

    useEffect(() => {
        const handleClickOutsideForm = (event) => {
        if (event.target.className === "feedback-form-overlay") {
            setShowForm(false);
        }
        };

        window.addEventListener("click", handleClickOutsideForm);

        return () => {
        window.removeEventListener("click", handleClickOutsideForm);
        };
    }, []);

    return (
        <>
        <button className="open-form-btn" onClick={handleOpenForm}>Feedback</button>
        {
            showForm && !isSubmitted && (
                <div className="feedback-form-overlay">
                    <div className="feedback-form-container">
                        <span className="form-close" onClick={handleCloseForm}>
                                &times;
                        </span>
                        <h2 className='gradient-text'>Phản hồi</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="feedback-question">
                                <p>Câu trả lời tìm được có đúng với điều bạn cần tìm ?
                                    {errors.answerFound && (
                                    <span className="error">{errors.answerFound}</span>
                                    )}
                                </p>
                                <label>
                                <input
                                    type="radio"
                                    name="answer-found"
                                    value="Đúng hoàn toàn"
                                    checked={answerFound === 'Đúng hoàn toàn'}
                                    onChange={handleAnswerFoundChange}
                                />
                                Đúng hoàn toàn
                                </label>
                                <label>
                                <input
                                    type="radio"
                                    name="answer-found"
                                    value="Đúng một phần"
                                    checked={answerFound === 'Đúng một phần'}
                                    onChange={handleAnswerFoundChange}
                                />
                                Đúng một phần
                                </label>
                                <label>
                                <input
                                    type="radio"
                                    name="answer-found"
                                    value="Có câu trả lời trong quy định tìm được nhưng chưa trả lời được"
                                    checked={answerFound === 'Có câu trả lời trong quy định tìm được nhưng chưa trả lời được'}
                                    onChange={handleAnswerFoundChange}
                                />
                                Có câu trả lời trong quy định tìm được nhưng chưa trả lời được
                                </label>
                                <label>
                                <input
                                    type="radio"
                                    name="answer-found"
                                    value="Không liên quan"
                                    checked={answerFound === 'Không liên quan'}
                                    onChange={handleAnswerFoundChange}
                                />
                                Không liên quan
                                </label>
                            </div>
                            <div className="feedback-question">
                                <p>Đoạn quy định tìm được có ứng với điều bạn cần ?
                                    {errors.ruleMatch && (
                                        <span className="error">{errors.ruleMatch}</span>
                                    )}
                                </p>
                                <label>
                                <input
                                    type="radio"
                                    name="rule-match"
                                    value="Đúng với top 1"
                                    checked={ruleMatch === 'Đúng với top 1'}
                                    onChange={handleRuleMatchChange}
                                />
                                Đúng với top 1
                                </label>
                                <label>
                                <input
                                    type="radio"
                                    name="rule-match"
                                    value="Đúng với top 2"
                                    checked={ruleMatch === 'Đúng với top 2'}
                                    onChange={handleRuleMatchChange}
                                />
                                Đúng với top 2
                                </label>
                                <label>
                                <input
                                    type="radio"
                                    name="rule-match"
                                    value="Đúng với top 3"
                                    checked={ruleMatch === 'Đúng với top 3'}
                                    onChange={handleRuleMatchChange}
                                />
                                Đúng với top 3
                                </label>
                                <label>
                                <input
                                    type="radio"
                                    name="rule-match"
                                    value="Chưa tìm được"
                                    checked={ruleMatch === 'Chưa tìm được'}
                                    onChange={handleRuleMatchChange}
                                />
                                Chưa tìm được
                                </label>
                            </div>
                            <div className="feedback-question">
                                <p>Bạn có góp ý gì thêm với hệ thống không ?
                                    {errors.suggestions && (
                                        <span className="error">{errors.suggestions}</span>
                                    )}
                                </p>
                                <textarea
                                value={suggestions}
                                onChange={handleSuggestionsChange}
                                />
                            </div>
                            <button type="submit" className='btn'>Gửi phản hồi</button>
                        </form>
                    </div>
                </div>
            )}
            {isSubmitted && (
                <div className="feedback-form-thank-you">
                    <p>Cảm ơn phản hồi của bạn!</p>
                </div>
            )}
        </>
    );
}

export default FeedbackForm;
