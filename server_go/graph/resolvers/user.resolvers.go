package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

	"github.com/dotNate/product_feedback_server/graph/common"
	"github.com/dotNate/product_feedback_server/graph/customTypes"
	"github.com/dotNate/product_feedback_server/graph/generated"
	// uuid "github.com/satori/go.uuid"
)

// CreateUser is the resolver for the createUser field.
func (r *mutationResolver) CreateUser(ctx context.Context, input *customTypes.UserInput) (*customTypes.User, error) {
	context := common.GetContext(ctx)
	user := &customTypes.User{
		ID:        "1",
		FirstName: input.FirstName,
		LastName:  input.LastName,
		Email:     input.Email,
		Username:  input.Username,
		Password:  input.Password,
	}

	err := context.Database.Create(&user).Error
	if err != nil {
		return nil, err
	}

	return user, nil
}

// GetAllUsers is the resolver for the getAllUsers field.
func (r *queryResolver) GetAllUsers(ctx context.Context) ([]*customTypes.User, error) {
	panic(fmt.Errorf("not implemented: GetAllUsers - getAllUsers"))
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
